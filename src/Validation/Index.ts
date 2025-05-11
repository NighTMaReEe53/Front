import * as yup from "yup";

export const Registerschema = yup
  .object({
    email: yup
      .string()
      .required("الايميل مطلوب")
      .email("هذا ليس ايميل الرجاء التأكد من ذالك"),
    username: yup
      .string()
      .required("الاسم مطلوب")
      .min(3, "الاسم يجب ان يكون علي الاقل 3 حروف"),
    password: yup
      .string()
      .min(5, "كلمة السر مطلوبة")
      .required("كلمة السر مطلوبة"),
  })
  .required();












export const Loginschema = yup
  .object({
    identifier: yup
      .string()
      .required("الايميل مطلوب")
      .email("هذا ليس ايميل الرجاء التأكد من ذالك"),
    password: yup
      .string()
      .min(5, "كلمة السر اقل شئ 5 حروف او ارقام علي الاقل")
      .required("كلمة السر مطلوبة"),
  })
  .required();
export const Up_Product = yup
  .object({
    title: yup
      .string()
      .required("اسم المنتج مطلوب")
      .min(5, "اسم المنتج يجب علي الاقل يكون من 5 حروف"),
    description: yup
      .string()
      .min(10, "وصف المنتج يجب ان يزيد عن 10 حروف")
      .required("وصف المنتج مطلوبة"),
    price: yup.string().required("سعر المنتج مطلوبة"),
    image: yup.string().required("صورة المنتج مطلوبة"),
  })
  .required();
