"use client"
import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction, TransactionInstruction } from '@solana/web3.js';
import { encodeURL, validateTransfer, parseURL, TransferRequestURL, findReference } from '@solana/pay';
import { useWallet } from "@solana/wallet-adapter-react";
import BigNumber from 'bignumber.js';
import { Button } from '@/components/ui/button';
import { SpecsCard } from '@/constants/images/models/specscard.model'
import { Download, Rocket } from 'lucide-react';
import bs58 from 'bs58';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import dynamic from "next/dynamic";
import { Input } from '@/components/ui/input';
import { useState } from 'react';


interface Props {
    props: SpecsCard;
}



const addr = process.env.NEXT_PUBLIC_ESCROW_CONTRACT_WALLET
const payer = Keypair.fromSecretKey(
    bs58.decode(`${addr}`)
)

const quickNodeEndpoint = 'https://green-wiser-violet.solana-testnet.quiknode.pro/ba1187ecaae779be46900d5f0355ac4ff2780bc7/'
const connection = new Connection(quickNodeEndpoint, 'confirmed')

const reference = new Keypair().publicKey
const label = 'Escrow Contract'
const message = 'Funding Escrow Contract'
const memo = 'Solana Pay Public Memo'





const ComputeCard = ({ props }: Props) => {
    const [model, setModel] = useState<File | null>(null);
    const [ds, setDs] = useState<File | null>(null);
    const [req, setReq] = useState<File | null>(null);
    const [dis, setDis] = useState(true);

    const { publicKey } = useWallet()

    async function GenerateUrl(
        recipient: PublicKey,
        amount: BigNumber,
        reference: PublicKey,
        label: string,
        message: string,
        memo: string
    ) {
        const url: URL = encodeURL({ recipient, amount, reference, label, message, memo })
        return url
    }


    async function processPayment(url: URL, payer: Keypair) {
        const { recipient, amount, reference, label, message, memo } = parseURL(url) as TransferRequestURL;
        if (!recipient || !amount || !reference) throw new Error('Invalid payment request link')

        const tx = new Transaction()

        if (memo != null) {
            tx.add(
                new TransactionInstruction({
                    programId: new PublicKey(`${publicKey}`),
                    keys: [],
                    data: Buffer.from(memo, 'utf8'),
                })
            )
        }
        const ix = SystemProgram.transfer({
            fromPubkey: payer.publicKey,
            toPubkey: recipient,
            lamports: amount.multipliedBy(LAMPORTS_PER_SOL).integerValue(BigNumber.ROUND_FLOOR).toNumber()
        });
        if (reference) {
            const ref = Array.isArray(reference) ? reference : [reference]
            for (const pubkey of ref) {
                ix.keys.push({ pubkey, isWritable: false, isSigner: false })
            }
        }

        tx.add(ix);

        const txId = await sendAndConfirmTransaction(connection, tx, [payer])
        console.log(txId)
    }


    async function verifyTx(
        recipient: PublicKey,
        amount: BigNumber,
        reference: PublicKey,
        memo: string
    ) {
        const found = await findReference(connection, reference)

        const response = await validateTransfer(
            connection,
            found.signature,
            {
                recipient,
                amount,
                splToken: undefined,
                reference,
                memo
            },
            { commitment: 'confirmed' }
        )
        return response
    }


    async function allInUnison() {
        try {
            const recepient = new PublicKey(props.address)

            const cost = parseInt(props.cpu) * (-0.000250583) + parseInt(props.ram) * 0.0000327202 + 0.00214017
            const amount = new BigNumber(cost)

            const url = await GenerateUrl(recepient, amount, reference, label, message, memo)
            await processPayment(url, payer);
            const response = await verifyTx(recepient, amount, reference, memo);
            if (!response || response.meta?.err) throw new Error('Not verified');
            console.log('🎉 Payment Confirmed!');
        }
        catch (err) {
            console.error(err)
        }
    }
    function upload() {
        setDis(false);
        fetch(`https://tappin-api.onrender.com/store/presigned-url?name=${props.id}_model`)
        fetch(`https://tappin-api.onrender.com/store/presigned-url?name=${props.id}_dataset`)
        fetch(`https://tappin-api.onrender.com/store/presigned-url?name=${props.id}_requirements`)
    }


    return (
        <div className='offsetstyle p-4 border  gap-2 border-black rounded-md bg-green-300'>
            <div className='grid grid-cols-2 gap-2'>
                <div className='flex flex-col '>
                    <span className='text-xs text-gray-600'>Device name</span>
                    <h1 className='text-xl font-medium'>{props.title}</h1>
                </div>
                <div className='flex flex-col'>
                    <span className='text-xs text-gray-600'>Available CPU</span>
                    <h1 className='text-xl font-medium'>{props.cpu}</h1>
                </div>
                <div className='flex flex-col'>
                    <span className='text-xs text-gray-600'>Available RAM</span>
                    <h1 className='text-xl font-medium'>{props.ram}GB</h1>
                </div>
                <div className='flex flex-col'>
                    <span className='text-xs text-gray-600'>Available space</span>
                    <h1 className='text-xl font-medium'>{props.storage}GB</h1>
                </div>
                <div className='flex flex-col'>
                    <span className='text-xs text-gray-600'>Instances</span>
                    <h1 className='text-xl font-medium'>{props?.activity}</h1>
                </div>
            </div>
            <div className='pt-2'>
                <Dialog>
                    <DialogTrigger className='generalBorder flex items-center gap-2 w-full offsetstyle bg-white justify-center'>  Launch <Rocket size={15} /></DialogTrigger>
                    <DialogContent className='bg-white offsetEffect generalBorder'>
                        <DialogHeader>
                            <DialogTitle>Launch machine</DialogTitle>
                            <DialogDescription>
                                Add your files to start working!
                            </DialogDescription>
                        </DialogHeader>
                        <div>
                            <div className='grid grid-cols-2 gap-2'>
                                <div className='flex flex-col '>
                                    <span className='text-xs text-gray-600'>Device name</span>
                                    <h1 className='text-xl font-medium'>{props.title}</h1>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-xs text-gray-600'>Available CPU</span>
                                    <h1 className='text-xl font-medium'>{props.cpu}</h1>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-xs text-gray-600'>Available RAM</span>
                                    <h1 className='text-xl font-medium'>{props.ram}GB</h1>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-xs text-gray-600'>Available space</span>
                                    <h1 className='text-xl font-medium'>{props.storage}GB</h1>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-xs text-gray-600'>Instances</span>
                                    <h1 className='text-xl font-medium'>{props?.activity}</h1>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 py-4 text-sm'>
                                <span>Upload the following files to get started</span>
                                <div>
                                    <span>Model file (model.py)</span>
                                    <Input type='file' onChange={(e) => setModel(e.target.files ? e.target.files[0] : null)} />
                                </div>
                                <div>
                                    <span>Dataset (dataset.csv)</span>
                                    <Input type='file' onChange={(e) => setDs(e.target.files ? e.target.files[0] : null)} />
                                </div>
                                <div>
                                    <span>Requirements (requirements.txt)</span>
                                    <Input type='file' onChange={(e) => setReq(e.target.files ? e.target.files[0] : null)} />
                                </div>
                                <Button onClick={(() => {
                                    upload();
                                })}>Start</Button>
                                <Button disabled={dis} ><a href="/src/contractor.py">Download contractor</a> <Download /> </Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>

            </div>
        </div>
    )
}
export default dynamic(() => Promise.resolve(ComputeCard), { ssr: false })