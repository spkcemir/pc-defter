"use client"

import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    id: "INV001",
    AdiSoyadi: "Paid",
    Fiyat: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    id: "INV002",
    AdiSoyadi: "Pending",
    Fiyat: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    id: "INV003",
    AdiSoyadi: "Unpaid",
    Fiyat: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "INV004",
    AdiSoyadi: "Paid",
    Fiyat: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    id: "INV005",
    AdiSoyadi: "Paid",
    Fiyat: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    id: "INV006",
    AdiSoyadi: "Pending",
    Fiyat: "$230.00",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "INV007",
    AdiSoyadi: "Unpaid",
    Fiyat: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default function Kayit() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Adı Soyadı</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Fiyatı</TableHead>
          <TableHead>Ayar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.AdiSoyadi}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell>{invoice.Fiyat}</TableCell>
            <TableCell className=" text-right">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Düzenle
                </label>
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Düzenle
                </label>
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Düzenle
                </label>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
