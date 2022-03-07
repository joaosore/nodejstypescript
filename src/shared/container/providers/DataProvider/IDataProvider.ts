interface IDataProvider {
  addDays(days: number): Date;
  dataDDMMAAAA(date: Date): Date;
}

export { IDataProvider };
