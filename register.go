package odoo_api_leads

import "go.k6.io/k6/js/modules"

const importPath = "k6/x/odoo_api_leads"

func init() {
	modules.Register(importPath, new(rootModule))
}
