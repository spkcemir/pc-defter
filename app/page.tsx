import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Plus, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      
      <div className="w-full bg-yellow-500 text-center py-4">
        <Link href="/kaydet" className="text-white text-lg font-bold">
          Link
        </Link>
      </div>

      
      <div className="flex-grow flex flex-col justify-center items-center bg-gray-100">
        <div className="text-lg font-bold mb-6">Kategori</div>
        <div className="flex space-x-6">
          
          <Link href="/kaydet" className="group w-52 h-52">
            <Button className="bg-yellow-400 w-full h-full flex flex-col items-center justify-center text-slate-950 rounded-lg shadow-md hover:shadow-lg hover:bg-yellow-500 transition-all duration-200">
              <Plus className="w-14 h-14 mb-3 text-slate-900 group-hover:text-slate-100 transition-colors" />
              <span className="text-base font-semibold group-hover:text-white">
                Ekle
              </span>
            </Button>
          </Link>
          
          <Link href="/kayit" className="group w-52 h-52">
            <Button className="bg-yellow-400 w-full h-full flex flex-col items-center justify-center text-slate-950 rounded-lg shadow-md hover:shadow-lg hover:bg-yellow-500 transition-all duration-200">
              <FileText className="w-14 h-14 mb-3 text-slate-900 group-hover:text-slate-100 transition-colors" />
              <span className="text-base font-semibold group-hover:text-white">
                Kayıtlar
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
