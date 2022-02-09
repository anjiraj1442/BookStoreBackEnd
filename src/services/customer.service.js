import NewAddressModel from '../models/Address.model';

export const newAddress = async (body) => {
  let response = {
    status: 201,
    success: true,
    message: '',
    data: ''
  };
  let newaddress = new NewAddressModel({
    addressType: body.addressType,
    fullAddress: body.fullAddress,
    city: body.city,
    state: body.state
  });

  const data = await NewAddressModel.create(newaddress);

  response.status = 201;
  response.success = true;
  response.message = 'Address Added';
  response.data = data;
  return response;
};
