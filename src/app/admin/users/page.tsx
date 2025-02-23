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
import { Edit2Icon, Delete } from "lucide-react";
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
import { userdata } from "../../../../data/userdata";

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
                <TableHead>Age</TableHead>
                <TableHead>Email</TableHead>

                <TableHead>Location</TableHead>
                <TableHead>Username</TableHead>

                <TableHead className="text-left">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userdata.map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">
                      {item.full_name}
                    </TableCell>
                    <TableCell>{item.age}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell>{item.username}</TableCell>



                    <TableCell className="text-right flex gap-4">
                      <Delete className="h-5 w-5 text-red-600 cursor-pointer text-right" />
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
