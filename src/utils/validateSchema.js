import { z } from "zod";

export const step1Schema = z
  .object({
    role: z.string(),
  })
  .refine((data) => data.role === "mentor" || data.role === "educator", {
    path: ["role"],
    message: "Bạn phải chọn một vai trò hợp lệ (mentor hoặc educator)",
  });

export const step2Schema = z.object({
  fullName: z.string().min(3, "Họ tên không được để trống"),
  called: z.string().min(1, "Vui lòng chọn cách xưng hô"),
  email: z.string().email("Email không hợp lệ"),
  phone: z.string().min(8, "SĐT không hợp lệ"),
  linkedin: z.string().url("LinkedIn không hợp lệ"),
  social: z.string().url("Link không hợp lệ"),
});
export const step3SchemaMentor = z.object({
  objectMentees: z.array(z.string()).min(1, "Vui lòng chọn 1 đối tượng"),
  sharingTopic: z.array(z.string()).min(1, "Vui lòng chọn 1 đối tượng"),
});
export const step3SchemaEducator = z.object({
  experience: z.string().min(1, "Vui lòng chọn kinh nghiêm"),
  expertise: z.array(z.string()).min(1, "Vui lòng chọn 1 chuyên môn"),
  image: z.array(z.object()).min(1, "Vui lòng chọn 1 ảnh"),
});
