import { Random } from "k6/x/odoo_api_leads";

export default function () {
  const rnd = new Random(42)

  console.log(rnd.int(2000))
  console.log(rnd.float())
}
