import { RadioButton } from "../components/NewTransactionModal/styles";

export interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export interface TransactionProps {
  title: string;
  amount: number;
  type: 'deposit' | 'withdraw';
  category: string;
}

export interface RadioButtonProps {
  isActive: boolean;
  activeColor: string;
}