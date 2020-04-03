# Sandbox serverless VPC Elasticsearch

A sample to use VPC and Elasticsearch Service with Serverless.

## Requirement

- aws-cli
- Node.js 12.x

## Usage

1. bootstrap

```shell
$ git clone git@github.com:kamataryo/sandbox-serverless-vpc-elasticsearch.git
$ cd sandbox-serverless-vpc-elasticsearch
$ yarn # or npm install
```

2. Optional. We need IAM Service Linked Role with Amazon Elasticsearch Service

**CAUTION** This command will create a stack named `sandbox-elasticsearch-linked-role`.

```shell
$ npm run deploy:role
```

3. Deployment

Be patient, the first deployment may take long.

```shell
$ npm run deploy
```

4. Removal

Be patient, this may also take about 30 min.

```shell
$ npm run remove
```

5. Optional. You can remove the Service Linked Role if you want.

**CAUTION** This command will remove the stack named `sandbox-elasticsearch-linked-role`.

```shell
$ npm run remove:role
```
