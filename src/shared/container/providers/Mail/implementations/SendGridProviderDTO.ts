interface ISendGridProviderDTO {
  name: string;
  email: string;
  status: string;
  boleto_url: string;
  prod_name: string;
  type?: string;
}

export { ISendGridProviderDTO };
