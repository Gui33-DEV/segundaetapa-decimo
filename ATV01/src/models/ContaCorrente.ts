import { ContaBancaria } from "./ContaBancaria.js";
import { ContaCorrenteProps } from "../interface/ContaCorrenteProps.js";

export class ContaCorrente extends ContaBancaria<ContaCorrenteProps> {

    public getLimite(): number {
        return this.props.limite;
    }

    public sacar(valor: number): void {
        if (valor <= this.props.saldo + this.props.limite) {
            this.props.saldo -= valor;
            console.log("Saque realizado!");
        } else {
            console.log("Limite insuficiente!");
        }
    }

    public exibirExtrato(): void {
        console.log("=== CONTA CORRENTE ===");
        console.log("Número:", this.getNumero());
        console.log("Agência:", this.getAgencia());
        console.log("Saldo:", this.getSaldo());
        console.log("Limite:", this.getLimite());
    }
}