
import Accordion from "@/components/common/Accordian";
import React from "react";

export default function HeaderFAQ() {
    return (
        <div className="px-[5%] pb-[3%]" id="faq">
            <h2 className="text-3xl font-bold">Frequently asked questions</h2>
            <div className="flex flex-col gap-4 py-4">
                {" "}
                <Accordion
                    question="Who are we?"
                    answer="We are a DEEPIN network that provide with "
                />
                <Accordion
                    question="What are the charges for renting a machine"
                    answer="It depends on the compute you are receiving from the provider. A Provider with higher computer will charge more than a one with lower. We try to keep the prices as reasonable as possible"
                />
            </div>
        </div>
    );
}
