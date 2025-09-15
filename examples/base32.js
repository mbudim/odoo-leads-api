import { b32encode } from "k6/x/odoo_api_leads";

export default function () {
  console.log(b32encode("Hello, World!"))
}
