"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  Home2,
  Card,
  Category,
  Barcode,
  People,
  Cake,
  Note,
  EmptyWallet,
  WalletCheck,
  Strongbox2,
  Blogger,
  Stickynote,
  HambergerMenu,
  BatteryFull,
  LoginCurve,
  Notification,
  SearchNormal1,
} from "iconsax-react";
import {
  Select,
  SelectItem,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor,
} from "@nextui-org/react";
import { PlusIcon } from "./PlusIcon";
import { VerticalDotsIcon } from "./VerticalDotsIcon";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { SearchIcon } from "./SearchIcon";
import { columns, users, statusOptions } from "./data";
import { capitalize } from "./utils";
import TableHead from "./Table";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = useState([
    { id: 1, name: "Home", image: Home2 },
    { id: 2, name: "Cadastro", image: Card },
    { id: 3, name: "Categoria", image: Category },

    { id: 4, name: "Produtos", image: Barcode },

    { id: 5, name: "Usuários", image: People },

    { id: 6, name: "Estabelecimentos", image: Cake },
  ]);

  const [item, setItem] = useState([
    { id: 7, name: "Relatórios", image: Note },
    { id: 8, name: "Relatório De Vendas", image: Card },
    { id: 9, name: "Forma De Recebimentos", image: EmptyWallet },

    { id: 10, name: "Forma De Balcão", image: WalletCheck },

    { id: 11, name: "Log De Entrada Na Mesa", image: Strongbox2 },

    { id: 12, name: "Pedidos", image: Blogger },
    { id: 13, name: "Estoque", image: Stickynote },
  ]);
  // State to keep track of the active item
  const [activeItemId, setActiveItemId] = useState(1);

  // Function to handle item click
  const handleItemClick = (id: number) => {
    setActiveItemId(id);
  };

  const animals = [
    {
      label: "Estabelecimento",
      value: "estabelecimento",
      description: "The largest land animal",
    },
    {
      label: "Tipo De Usuário",
      value: "tipo De Usuário",
      description: "The king of the jungle",
    },
    {
      label: "Status",
      value: "status",
      description: "The tallest land animal",
    },
  ];

  const statusColorMap: Record<string, ChipProps["color"]> = {
    active: "success",
    paused: "danger",
    vacation: "warning",
  };

  const INITIAL_VISIBLE_COLUMNS = ["name", "role", "status", "actions"];

  type User = (typeof users)[0];

  return (
    <main className="flex min-h-screen flex-row font-[Inter]">
      {open ? (
        <div className="w-[30px] h-screen bg-[#000000] pt-4 cursor-pointer">
          <HambergerMenu
            size="28"
            color="#FFFFFF"
            onClick={() => setOpen(false)}
          />
        </div>
      ) : (
        <div className="w-[250px] h-screen bg-[#D91D1D] p-4 ">
          <div className="w-full flex-col flex items-center">
            <Image
              src="/(Logo) RedTie 1.png"
              alt="logo"
              width={64}
              height={64}
            />
          </div>
          <div className="mt-4">
            <div className="text-[#FFFFFFA1] text-[9px] font-normal">
              Bem-vindo,
            </div>
            <div className="text-[#F2F2F7] text-[13px] font-medium">
              Luan Bani
            </div>

            <div className="mt-4 ml-4 relative">
              <ul className="list-disc ">
                <li className="text-[#F2F2F7] text-[10px] font-semibold">
                  Home
                </li>
                <li className="text-[#F2F2F7] mt-2 text-[10px] font-semibold">
                  Cadastros
                </li>
              </ul>

              <HambergerMenu
                size="18"
                color="#FFFFFF"
                className=" absolute right-0 top-0 cursor-pointer"
                onClick={() => setOpen(true)}
              />
            </div>

            <div className="mt-8">
              <div className="text-[#FFFFFF66] text-[10px] font-normal">
                Dashboards
              </div>

              <div className="flex flex-col gap-1 mt-2 ">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className={`w-full h-[30px]  rounded-[6px] flex flex-row items-center ${
                      activeItemId === item.id
                        ? "bg-[#0000000D] "
                        : "bg-[#D91D1D]"
                    }`}
                    onClick={() => handleItemClick(item.id)}
                  >
                    {activeItemId === item.id && (
                      <Image
                        src="/Rectangle 1.png"
                        alt="logo"
                        width={3}
                        height={11}
                      />
                    )}
                    <div className="flex flex-row cursor-pointer items-center ml-6">
                      <item.image size="15" color="#F2F2F7" />

                      <div className="text-[#F2F2F7] text-[10px] font-semibold ml-2">
                        {item.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1 mt-5 ">
                {item.map((item) => (
                  <div
                    key={item.id}
                    className={`w-full h-[30px]  rounded-[6px] flex flex-row items-center ${
                      activeItemId === item.id
                        ? "bg-[#0000000D] "
                        : "bg-[#D91D1D]"
                    }`}
                    onClick={() => handleItemClick(item.id)}
                  >
                    {activeItemId === item.id && (
                      <Image
                        src="/Rectangle 1.png"
                        alt="logo"
                        width={3}
                        height={11}
                      />
                    )}
                    <div className="flex flex-row cursor-pointer items-center ml-6">
                      <item.image size="15" color="#F2F2F7" />

                      <div className="text-[#F2F2F7] text-[10px] font-semibold ml-2">
                        {item.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="w-full">
        <div className="w-full py-4 px-8 h-[52px] shadow-lg border-b bordeer-[#0000001A] ">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-2">
              <BatteryFull size="20" color="#1C1C1C" />

              <div className="text-[#00000066] font-normal text-[10px]">
                Usuários
              </div>
              <div className="text-[#00000033] font-normal text-[10px]">/</div>
              <div className=" font-normal text-[10px] text-[#1C1C1C]">
                Gestão de Pessoas
              </div>
            </div>
            <div className="text-[#000000] font-bold text-[16px]">
              McDonald&apos;s
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="relative w-[150px] h-[20px] flex items-center rounded-[5.83px] p-2 bg-[#0000000D]">
                <input
                  type="text"
                  placeholder="Search"
                  id="search"
                  className=" bg-[#0000000D] ml-3 outline-none  text-[#00000033] font-normal text-[10px]  "
                ></input>

                <SearchNormal1
                  size="10"
                  color="#FFFFFF"
                  className="absolute left-0 top-1 ml-1"
                />
                <Barcode
                  size="10"
                  color="#FFFFFF"
                  className="absolute right-0 top-1 ml-1"
                />
              </div>

              <Notification size="20" color="#000000" />
              <div className="text-[#00000033] font-normal text-[10px]">/</div>
              <LoginCurve size="20" color="#000000" />
            </div>
          </div>
        </div>

        {/* <Select
          items={animals}
          label="Search Filters"
          className="max-w-[151px] mt-4 ml-4 "
        >
          {(animal) => (
            <SelectItem key={animal.value}>{animal.label}</SelectItem>
          )}
        </Select> */}

        <div className="p-8">
          <TableHead />
        </div>
      </div>
    </main>
  );
}
