import { PrismaClient } from '@prisma/client'
import { Service } from 'typedi'

export class DatabaseConfig {
  static setup() {}
}

export interface IDBConnection<t> {
  instance: t
  connect(): Promise<any>
  disconnect(): Promise<any>
}

@Service()
export class PrismaConnection implements IDBConnection<PrismaClient> {
  private _instance: PrismaClient
  constructor() {
    this._instance = new PrismaClient()
  }

  connect(): Promise<void> {
    return this.instance.$connect()
  }

  disconnect(): Promise<void> {
    return this.instance.$disconnect()
  }

  public get instance(): PrismaClient {
    return this._instance
  }
}
