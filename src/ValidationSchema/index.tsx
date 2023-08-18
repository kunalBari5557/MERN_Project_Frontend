import * as Yup from "yup";

// export const AdminLoginSchema = Yup.object({
//     username: Yup.string().max(255,"Email must not be greater than 255 characters.").matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/ , 'Email must be a valid email address.').required("Email field is required."),
//     password: Yup.string().max(255,"Password must not be greater than 255 characters.").required("Password field is required."),
// });

export const AdminLoginSchema = Yup.object({
    email: Yup.string().max(255,"Email must not be greater than 255 characters.").matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/ , 'Email must be a valid email address.').required("Email field is required."),
    password: Yup.string().max(255,"Password must not be greater than 255 characters.").required("Password field is required."),
});

export const ProductSchema = Yup.object({
    title: Yup.string().max(10,"Title must not be greater than 10 characters.").required("Title field is required."),
    price: Yup.string().max(10,"Price must not be greater than 10 characters.").required("Price field is required."),
    description: Yup.string().max(255,"Title must not be greater than 255 characters.").required("Title field is required."),
    category: Yup.string().max(255,"Title must not be greater than 255 characters.").required("Title field is required."),
    // image: Yup.string().max(255,"Title must not be greater than 255 characters.").required("Title field is required."),
    rate_id: Yup.string().max(255,"Title must not be greater than 255 characters.").required("Title field is required."),
});

export const ProductUpdateSchema = Yup.object({
    title: Yup.string().max(10,"Title must not be greater than 10 characters.").required("Title field is required."),
    price: Yup.string().max(10,"Price must not be greater than 10 characters.").required("Price field is required."),
    description: Yup.string().max(255,"Title must not be greater than 255 characters.").required("Title field is required."),
    category: Yup.string().max(255,"Title must not be greater than 255 characters.").required("Title field is required."),
    // image: Yup.string().max(255,"Title must not be greater than 255 characters.").required("Title field is required."),
    rate_id: Yup.string().max(255,"Title must not be greater than 255 characters.").required("Title field is required."),
});

export const UserSchema = Yup.object({
    name: Yup.object({
        firstname: Yup.string().max(10, "First name must not be greater than 10 characters.").required("First name field is required."),
        lastname: Yup.string().max(10, "Last name must not be greater than 10 characters.").required("Last name field is required.")
      }),
    username: Yup.string().max(10,"Title must not be greater than 10 characters.").required("Username field is required."),
    email: Yup.string().max(255,"Email must not be greater than 255 characters.").matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,3}$/, 'Email must be a valid email address.').required("Email field is required."),
    password: Yup.string().max(255,"Password must not be greater than 255 characters.").required("Password field is required."),
    phone: Yup.string().max(15,"Phone must not be greater than 15 characters.").required("Phone field is required."),
});

export const UserUpdateSchema = Yup.object({
    name: Yup.object({
        firstname: Yup.string().max(10, "First name must not be greater than 10 characters.").required("First name field is required."),
        lastname: Yup.string().max(10, "Last name must not be greater than 10 characters.").required("Last name field is required.")
      }),
    username: Yup.string().max(10,"Title must not be greater than 10 characters.").required("Username field is required."),
    email: Yup.string().max(255, "Email must not be greater than 255 characters.").email("Invalid email format").required("Email field is required."),
    password: Yup.string().max(255,"Password must not be greater than 255 characters.").required("Password field is required."),
    phone: Yup.string().max(15,"Phone must not be greater than 15 characters.").required("Phone field is required."),
});


