"use client";

import { DropdownMenuDemo } from "@/components/dropdown-menu";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InputField } from "@/components/InputField";

export default function KaydetPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-800">
      <header className="w-full flex justify-between items-center p-4 bg-white shadow-sm dark:bg-slate-900">
        <DropdownMenuDemo />
        <ModeToggle />
      </header>

      <main className="flex-grow w-full max-w-3xl mx-auto p-5">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-slate-50 mb-6">
          Yeni Bilgisayar Ekle
        </h1>

        <Card className="shadow-lg rounded-lg border border-gray-200 dark:border-slate-700 dark:bg-slate-900">
          <CardHeader className="bg-gray-100 dark:bg-slate-950 p-4 rounded-t-lg">
            <CardTitle className="text-xl font-semibold text-gray-800 dark:text-slate-50">
              Proje Oluştur
            </CardTitle>
            <CardDescription className="text-sm text-gray-600 dark:text-slate-400">
              Yeni projenizi tek tıklama ile dağıtın.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <form>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField label="Adı" id="name" placeholder="Adınızı girin" />
                  <InputField
                    label="Soyadı"
                    id="surname"
                    placeholder="Soyadınızı girin"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    label="Telefon"
                    id="phone"
                    placeholder="Telefon numaranız"
                  />
                  <InputField
                    label="Fiyat"
                    id="price"
                    placeholder="Fiyatı girin"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    label="Masraf"
                    id="expense"
                    placeholder="Masrafı girin"
                  />
                  <InputField
                    label="Hatası"
                    id="error"
                    placeholder="Hataları belirtin"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="model"
                    className="text-sm font-medium text-gray-700 dark:text-slate-50"
                  >
                    Model
                  </label>
                  <Select>
                    <SelectTrigger id="model" className="border-gray-300">
                      <SelectValue placeholder="Marka seçin" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="acer">ACER</SelectItem>
                      <SelectItem value="apple">APPLE</SelectItem>
                      <SelectItem value="asus">ASUS</SelectItem>
                      <SelectItem value="casper">CASPER</SelectItem>
                      <SelectItem value="dell">DELL</SelectItem>
                      <SelectItem value="hp">HP</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between bg-gray-100 p-4 rounded-b-lg dark:bg-slate-950">
            <Button variant="outline" className="w-28">
              İptal
            </Button>
            <Button className="w-28 bg-blue-600 text-white hover:bg-blue-700">
              Kaydet
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
