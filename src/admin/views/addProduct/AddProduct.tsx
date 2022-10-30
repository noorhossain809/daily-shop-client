import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormTextarea,
  CInputGroup,
} from '@coreui/react';
import React, { useState } from 'react';
import ProductService from 'services/ProductService';

interface IFormData {
  _id?: string;
  name: string;
  category: string;
  description: string;
  store: string;
  price: string;
  image: any;
}

const AddProduct = () => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const [formData, setFormData] = useState<IFormData>({
    store: '611133844180ee0b13254168',
    category: '611130734180ee0b1325415e'
  } as IFormData);

  const [file, setFile] = useState<string>("")

  const handleFileUpload = (e : any) => {
    setFile(e.target.files[0])
  }
  console.log("files", file)

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e : any) => {
    e.preventDefault()
console.log('submited');
    const newFormData = new FormData()
    newFormData.append('name', formData.name)
    newFormData.append('category', formData.category)
    newFormData.append('description', formData.description)
    newFormData.append('image', file)
    newFormData.append('store', formData.store)
    newFormData.append('price', formData.price)
    ProductService.addProduct(newFormData)
  }

  return (
    <CCard>
      <CCardHeader>Add Product</CCardHeader>
      <CCardBody>
        <CForm onSubmit={handleSubmit} className="row g-3">
          <CCol md={4}>
            <CFormInput
              onChange={handleChange}
              type="name"
              name="name"
              label="Product Name"
              required
            />
          </CCol>

          <CCol md={6}>
            <CFormInput
              onChange={handleChange}
              type="number"
              name="price"
              label="Price"
              required
            />
          </CCol>
          <CInputGroup className="mb-3">
            <CFormInput onChange={handleFileUpload} name='image' type="file" id="inputGroupFile02" />
            
          </CInputGroup>

          <CCol xs={12}>
            <CFormCheck
              type="checkbox"
              label="Agree to terms and conditions"
              required
            />
          </CCol>
          <CCol md={12}>
            <CFormTextarea
            name="description"
              onChange={handleChange}
              id="exampleFormControlTextarea1"
              label="Example textarea"
              rows={3}
              text="Must be 8-20 words long."
            ></CFormTextarea>
          </CCol>
          <CCol xs={12}>
            <CButton color="primary" type="submit">
              Submit form
            </CButton>
          </CCol>
        </CForm>
      </CCardBody>
    </CCard>
  );
};

export default AddProduct;
