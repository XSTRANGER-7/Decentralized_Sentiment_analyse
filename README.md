<h1 align="center">
  <br>
  <a href="https://github.com/r3yc0n1c/tappin-core"><img src="https://github.com/r3yc0n1c/tappin-core/assets/57730879/3dc302dd-f62e-48f6-9e36-ca0d87de112a" alt="Tappin Logo" width="200"></a>
  <br>
  TAppIN
  <br>
</h1>

<h4 align="center">Decentralized AI training powered by resource-driven computing and secure data sharing.</h4>

## 📋 ToC
- [About](#about)
- [Built with](#built-with)
- [Key Features](#key-features)
- [Demo](#demo)
- [Deployment](#deployment)
- [API Reference](#api-reference)
- [Authors](#authors)
- [Contact Us](#contact-us)

## About
TAppIN is a decentralized physical infrastructure network for AI as a training service. This utilizes the concept of DePIN. Here we leverage the blockchain network to organize and manage the physical hardware network and in the end allow users to use desired machines for training their AI models. Users with higher specs can list their devices in this network and thus earn too, thus a well maintained use of excess resources, indeed.

<div align="right">[ <a href="#-toc">Back to top ↑</a> ]</div>

## Built with
- Next.js
- Tailwind CSS
- Bun
- Elysia.js
- Web3.js
- Solana Blockchain (Solana Pay)
- Google Cloud Platform (Bucket)
- Composio
- DevPod
- Callchimp.ai
- PM2
- GitHub Actions
- Render
- Vercel

<div align="right">[ <a href="#-toc">Back to top ↑</a> ]</div>

## Key Features
-   First Decentralised Physical Infrastructure Network for AI Training as a service.
-   Resource Monetization for high spec machine providers
-   Trust and Security due to blockchain in monetary transactions
-   Build for traning AI models remotely
-   Community Driven
-   Flexibility
-   Cost Efficiency

<div align="right">[ <a href="#-toc">Back to top ↑</a> ]</div>

## Demo

[![Watch the video](https://img.youtube.com/vi/75CufYzomLs/0.jpg)](https://www.youtube.com/watch?v=75CufYzomLs)

<div align="right">[ <a href="#-toc">Back to top ↑</a> ]</div>

## Deployment

To deploy the backend run

```bash
  cd backend
  bun install
  bun dev
```

To deploy the frontend run

```bash
  cd frontend
  bun install
  bun dev
```

<div align="right">[ <a href="#-toc">Back to top ↑</a> ]</div>

## API Reference
All the endpoins are well documented by using Swagger (`/swagger`)

#### Auth Sign Up

```
  POST /auth/sign-up
```

| Parameter  | Type     | Description   |
| :--------- | :------- | :------------ |
| `email`    | `string` | **Required**. |
| `password` | `string` | **Required**. |
| `name`     | `string` | **Required**. |
| `address`  | `string` | **Required**. |
| `role`     | `string` | **Required**. |

#### Auth Login

```
  POST /auth/login
```

| Parameter  | Type     | Description   |
| :--------- | :------- | :------------ |
| `email`    | `string` | **Required**. |
| `password` | `string` | **Required**. |

#### Create Machine

```
  POST /machine/create
```

| Parameter | Type      | Description   |
| :-------- | :-------- | :------------ |
| `userId`  | `string`  | **Required**. |
| `title`   | `string`  | **Required**. |
| `cpu`     | `integer` | **Required**. |
| `ram`     | `integer` | **Required**. |
| `size`    | `integer` | **Required**. |
| `time`    | `integer` | **Required**. |

#### Storing Data

```
  GET /store/presigned-url
```

| Parameter | Type     | Description   |
| :-------- | :------- | :------------ |
| `name`    | `string` | **Required**. |

<div align="right">[ <a href="#-toc">Back to top ↑</a> ]</div>

## Authors

-   [@Raja Majumdar](https://github.com/r3yc0n1c)
-   [@Abhirup Saha](https://github.com/Abhirup-02)
-   [@Diptanshu Mahish](https://github.com/diptanshumahish)
-   [@Ankit Paul](https://github.com/Ankit-AP-Paul)

## Contact Us

If you have any queries, feedback, or want to collaborate, please reach out to us at our [discord](https://discord.gg/aqdx4JBC) channel.

<div align="right">[ <a href="#-toc">Back to top ↑</a> ]</div>
