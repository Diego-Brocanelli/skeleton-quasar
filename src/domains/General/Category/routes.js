import { crud, group } from 'src/app/Util/routing'
import { domain, path } from './settings'

/**
 * @returns {Array<RouteConfig>}
 */
export default () => {
  // index
  const index = () => import('src/modules/Group.vue')
  // table
  const table = () => import('src/views/dashboard/general/category/CategoryTable')
  // form
  const form = () => import('src/views/dashboard/general/category/CategoryForm')

  const children = crud(domain, path, table, form)
  const meta = { namespace: domain, scope: 'group' }
  return [
    group(path, index, children, meta)
  ]
}
