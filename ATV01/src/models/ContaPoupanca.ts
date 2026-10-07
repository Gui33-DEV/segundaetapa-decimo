import { ContaBancaria } from "./ContaBancaria.js";
import { ContaPoupancaProps } from "../interface/ContaPoupancaProps.js";

export class ContaPoupanca extends ContaBancaria<ContaPoupancaProps> {

    public getTaxaAniversario(): number {
        return this.props.taxaAniversario;
    }

    public renderJuros(): void {
        this.props.saldo += this.props.saldo * this.props.taxaAniversario;
    }

    public exibirExtrato(): void {
        console.log("=== CONTA POUPANÇA ===");
        console.log("Número:", this.getNumero());
        console.log("Agência:", this.getAgencia());
        console.log("Saldo:", this.getSaldo());
        console.log("Taxa:", this.getTaxaAniversario());
    }
}