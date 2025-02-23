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
import { categorydata } from "../../../../data/categorydata";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function page() {
  const router = useRouter();
  return (
    <>
      <div className=" flex flex-col gap-5">
        <div className=" flex  items-center justify-between px-3 mb-4">
          <Goback link="/admin" title="Back to Dashboard" />
          <Dialog>
            <DialogTrigger asChild>
            <Button>Add Category</Button>

            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Category</DialogTitle>
                <DialogDescription>
                  Enter category details to create a new category.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-left">
                    Category Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter category name"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-left">
                    Description
                  </Label>
                  <Input
                    id="description"
                    placeholder="Enter category description"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter className="text-center">
                <Button type="submit" className="text-center" onClick={()=>router.push('/admin')}>Save Category</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="px-3">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">Category Name</TableHead>
                <TableHead>Number of Products</TableHead>
                <TableHead className="text-left">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categorydata.map((item) => {
                return (
                  <TableRow>
                    <TableCell className="font-medium">
                      {item.category_name}
                    </TableCell>
                    <TableCell>{item.products_count}</TableCell>
                    <TableCell className="text-right flex gap-4">
                      <Edit2Icon className="h-5 w-5 text-green-600 cursor-pointer" />
                      <Delete className="h-5 w-5 text-red-600 cursor-pointer" />
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
