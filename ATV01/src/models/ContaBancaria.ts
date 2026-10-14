import { ContaProps } from "../interface/ContaProps.js
";

export abstract class ContaBancaria<T extends ContaProps> {

    protected props: T;

    constructor(props: T) {
        this.props = props;
    }

    public getNumero(): string {
        return this.props.numero;
    }

    public getAgencia(): string {
        return this.props.agencia;
    }

    public getSaldo(): number {
        return this.props.saldo;
    }

    public sacar(valor: number): void {
        if (valor <= this.props.saldo) {
            this.props.saldo -= valor;
            console.log("Saque realizado!");
        } else {
            console.log("Saldo insuficiente!");
        }
    }

    public depositar(valor: number): void {
        if (valor > 0) {
            this.props.saldo += valor;
            console.log("Depósito realizado!");
        }
    }

    public abstract exibirExtrato(): void;
}