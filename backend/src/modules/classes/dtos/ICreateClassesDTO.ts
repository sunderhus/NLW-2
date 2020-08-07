interface ISChedule {
  week_day: number;
  from: string;
  to: string;
}

export default interface ICreateClassesDTO {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;

  subject: string;
  cost: string;
  schedule: Array<ISChedule>;
}
