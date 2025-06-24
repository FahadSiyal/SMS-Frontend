"use client"

import type React from "react"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// Updated Schema with your specified fields
const createStudentSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    cnic: z.string().min(13, "CNIC must be at least 13 digits").max(15, "CNIC is too long"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    gender: z.enum(["male", "female", "other"], {
      required_error: "Please select a gender",
    }),
    class: z.string().min(1, "Class is required"),
    section: z.string().min(1, "Section is required"),
    rollNumber: z.string().min(1, "Roll number is required"),
    guardianName: z.string().min(1, "Guardian name is required"),
    guardianPhone: z.string().min(10, "Guardian phone number must be at least 10 digits"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

type StudentFormValues = z.infer<typeof createStudentSchema>

export function CreateStudentForm({ className, ...props }: React.ComponentProps<"div">) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<StudentFormValues>({
    resolver: zodResolver(createStudentSchema),
  })

  const watchedGender = watch("gender")

  const onSubmit = (data: StudentFormValues) => {
    console.log("Student data:", data)
    reset()
  }

  return (
    <div className={cn("min-h-screen  py-12 px-4", className)} {...props}>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Student Verification Form</h1>
            <p className="text-sm text-blue-600">Please complete the form below to verify your student status.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <Label className="text-sm font-medium text-blue-600 mb-2 block">Full Name</Label>
              <Input {...register("name")} placeholder="Enter your full name" className="w-full" />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="text-sm font-medium text-blue-600 mb-2 block">Email</Label>
                <Input {...register("email")} type="email" placeholder="example@example.com" className="w-full" />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <Label className="text-sm font-medium text-blue-600 mb-2 block">Phone Number</Label>
                <Input {...register("phone")} type="tel" placeholder="03001234567" className="w-full" />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
              </div>
            </div>

            {/* Password & Confirm Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="text-sm font-medium text-blue-600 mb-2 block">Password</Label>
                <Input {...register("password")} type="password" placeholder="Enter password" className="w-full" />
                {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>}
              </div>
              <div>
                <Label className="text-sm font-medium text-blue-600 mb-2 block">Confirm Password</Label>
                <Input
                  {...register("confirmPassword")}
                  type="password"
                  placeholder="Confirm password"
                  className="w-full"
                />
                {errors.confirmPassword && (
                  <p className="text-xs text-red-500 mt-1">{errors.confirmPassword.message}</p>
                )}
              </div>
            </div>

            {/* CNIC */}
            <div>
              <Label className="text-sm font-medium text-blue-600 mb-2 block">CNIC</Label>
              <Input {...register("cnic")} placeholder="12345-1234567-1" className="w-full" />
              <p className="text-xs text-gray-500 mt-1">Enter your 13-digit CNIC number</p>
              {errors.cnic && <p className="text-xs text-red-500 mt-1">{errors.cnic.message}</p>}
            </div>

            {/* Gender */}
            <div>
              <Label className="text-sm font-medium text-blue-600 mb-3 block">Gender</Label>
              <RadioGroup
                value={watchedGender}
                onValueChange={(value) => setValue("gender", value as "male" | "female" | "other")}
                className="flex flex-row space-x-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male" className="text-sm font-normal cursor-pointer">
                    Male
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female" className="text-sm font-normal cursor-pointer">
                    Female
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other" className="text-sm font-normal cursor-pointer">
                    Other
                  </Label>
                </div>
              </RadioGroup>
              {errors.gender && <p className="text-xs text-red-500 mt-1">{errors.gender.message}</p>}
            </div>

            {/* Class, Section & Roll Number */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label className="text-sm font-medium text-blue-600 mb-2 block">Class</Label>
                <Input {...register("class")} placeholder="e.g., 10th, FSc, BS" className="w-full" />
                {errors.class && <p className="text-xs text-red-500 mt-1">{errors.class.message}</p>}
              </div>
              <div>
                <Label className="text-sm font-medium text-blue-600 mb-2 block">Section</Label>
                <Input {...register("section")} placeholder="e.g., A, B, C" className="w-full" />
                {errors.section && <p className="text-xs text-red-500 mt-1">{errors.section.message}</p>}
              </div>
              <div>
                <Label className="text-sm font-medium text-blue-600 mb-2 block">Roll Number</Label>
                <Input {...register("rollNumber")} placeholder="e.g., 001, 123" className="w-full" />
                {errors.rollNumber && <p className="text-xs text-red-500 mt-1">{errors.rollNumber.message}</p>}
              </div>
            </div>

            {/* Guardian Information */}
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-3 block">Guardian Information</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-sm font-medium text-blue-600 mb-2 block">Guardian Name</Label>
                  <Input {...register("guardianName")} placeholder="Enter guardian's full name" className="w-full" />
                  {errors.guardianName && <p className="text-xs text-red-500 mt-1">{errors.guardianName.message}</p>}
                </div>
                <div>
                  <Label className="text-sm font-medium text-blue-600 mb-2 block">Guardian Phone</Label>
                  <Input {...register("guardianPhone")} type="tel" placeholder="03001234567" className="w-full" />
                  {errors.guardianPhone && <p className="text-xs text-red-500 mt-1">{errors.guardianPhone.message}</p>}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-colors"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
