import React from 'react'
import store from 'redux/store'
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const MerchantDashboard = React.lazy(() => import('./views/dashboard/MerchantDashboard'))
const UserList = React.lazy(() => import('./views/userList/UserList'))
const TableList = React.lazy(() => import('./views/table/TableList'))
const AddProduct = React.lazy(() => import('./views/addProduct/AddProduct'))
const Page404 = React.lazy(() => import('./page404/Page404'))

const {auth : {data}} = store.getState()

const selectDashboard = () => {
  switch(data?.role){
    case "merchant":
      return MerchantDashboard;
    case "admin":
      return Dashboard;
    default:
      return Page404;
          
  }
}

const routes = [
  {exact: true, path: '/dashboard', name: 'Dashboard', element: selectDashboard(), role: ["admin", "merchant", "user"] },
  { path: '/dashboard/users', name: 'User List', element: UserList,role: ["admin"] },
  { path: '/dashboard/products', name: 'Product List', element: TableList, role: ["merchant"] },
  { path: '/dashboard/add-product', name: 'Product List', element: AddProduct, role: ["admin"] },
 
]

export default routes
