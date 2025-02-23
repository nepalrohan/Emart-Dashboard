"use client"
import Goback from "@/components/Goback";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { orderdata } from "../../../../data/ordersdata";

function page() {
  const router = useRouter();
  return (
    <>
      <div className=" flex flex-col gap-5">
        <div className=" flex  items-center justify-between px-3 mb-4">
          <Goback link="/admin" title="Back to Dashboard" />
        
        </div>
        <div className="px-3">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">Name</TableHead>
                <TableHead>Customer-Id</TableHead>
                <TableHead>Date</TableHead>

                <TableHead>Status</TableHead>
                <TableHead>Total</TableHead>

                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orderdata.map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">
                      {item.items.map((order)=>(
                        <ul className="flex gap-2 ">
                          <li>{order.product_name}</li> -
                          <li>{order.quantity}</li>


                        </ul>
                      ))}
                    </TableCell>
                    <TableCell>{item.customer_id}</TableCell>
                    <TableCell>{item.order_date}</TableCell>
                    <TableCell>{item.order_status}</TableCell>
                    <TableCell>Rs.{item.total_amount}</TableCell>



                    <TableCell className="text-right flex  gap-2 ">
                      <span className="px-3 py-1 rounded bg-red-500 w-[90px] text-white font-bold cursor-pointer">Processing</span>
                      <span className="px-3 py-1 rounded bg-yellow-500 w-[80px] text-white font-bold cursor-pointer">Shiped</span>
                      <span className="px-3 py-1 rounded bg-green-500 w-[80px] text-white font-bold cursor-pointer">Delivered</span>

                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}

export default page;
