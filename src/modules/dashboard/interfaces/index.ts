export interface Anno {
  id: number;
  nombre: number;
  mes: Mes[];
}

export interface Mes {
  id: number;
  anno?: Anno["id"];
  nombre: string;
  numero: number;
  constenedor: Contenedor[];
}

export interface Contenedor {
  id: number;
  tipo: TipoContenedor["id"];
  mes: Mes["id"];
  codigo: string;
  sello: string;
  estado: string;
  volumenM3: number;
  maxPesoKg: number;
  motonave: string;
  mbl: string;
  puertoSalida: string;
  puertoEntrada: string;
  fechaEntrada: Date;
  fechaSalida: Date;
  indice: number;
  indiceAnual: number;
  concepto: Concepto[];
}

export interface TipoContenedor {
  id: number;
  nombre: string;
  volumenM3: number;
  pesoKg: number;
}

export interface Concepto {
  id: number;
  tipo: string; //Tipo de concepto
  discr: TipoConcepto;
  sisgerCode?: string;
  remitente?: Client["id"] | null;
  consignado?: Client["id"];
  bultos: Bulto[];
  fechaCreacion: Date;
  contenedor: Contenedor["id"];
  estado: TipoEstadoConcepto;
  fechaHBL: Date;
  expediente?: Reply["id"];
  ena?: Ena;
  envio?: Envio;
  menaje?: Menaje;
}

export interface Envio {
  id: number;
  remitenteNombre: string;
  remitenteCedula: string;
  concepto: Concepto["id"];
}

export interface Ena {
  id: number;
  fechaEntrada: Date;
  fechaSalida: Date;
  concepto: Concepto["id"];
}

export interface Menaje {
  id: number;
  fechaAutorizacion: Date;
  concepto: Concepto["id"];
}

export enum TipoEstadoConcepto {
  HBL = "HBL",
  RVA = "RVA",
}

export enum TipoConcepto {
  ENVIO = "envio",
  MENAJE = "menaje",
  ENA = "ena",
}

export interface Bulto {
  id: number;
  concepto?: Concepto["id"];
  sisgerCode?: string;
  indice: number;
  dentro: boolean;
  pared?: number | null;
  mercancia: Mercancia[];
}

export interface Mercancia {
  id: number;
  bulto?: Bulto["id"];
  fechaCreacion: Date;
  descripcion: string;
  cantidad: number;
  volumenM3: number;
  pesoKg: number;
  pesoLb: number;
  relacion: number;
  arancel?: Arancel["id"];
  tarifa?: null;
  alturaCm: number;
  anchoCm: number;
  profundidadCm: number;
  tarifaAlternativa?: null;
  miRelacionada?: null;
  other_mercancia: any[];
}

export interface Client {
  id: number;
  user: number;
  firstName: string;
  lastName: string;
  phones: string;
  email: string;
  createdAt: Date;
  dni: string;
  passport: string;
  address: string;
  municipality: string;
  province: string;
  country: string;
  cell: string;
  ingreso: Ingreso[];
  precioventa: PrecioVenta[];
  reply: Reply[];
  voucher: Voucher[];
}

export interface Ingreso {
  id: number;
  cliente?: Client["id"];
  recibiDe: string;
  detalles?: string;
  saldoAnterior?: number;
  abono?: number;
  saldoPendiente?: number;
  idIngreso?: number;
  cuentaXCobrar: boolean;
  fechaLimite?: Date;
}

export interface PrecioVenta {
  id: number;
  expediente?: number;
  cliente?: Client["id"];
  precio?: number;
  expedienteLider: Client["id"];
}

export interface Reply {
  //expediente
  id: number;
  user?: User["id"];
  beginDate: Date;
  finishDate: Date;
  pax: number;
  observations?: string;
  price?: number;
  sisgerCode: string;
  leader: Client["id"];
  createdAt: Date;
  month: number;
  year: number;
  workspace?: number;
}

export interface Voucher {
  id: number;
  client?: Client["id"];
  reply?: Reply["id"];
  beginDate: Date;
  finishDate: Date;
  creationDate: Date;
  pax: number;
  provider: string;
  sisgerCode?: string;
  user?: User["id"];
  refproviders?: string;
  services?: string;
  activo?: boolean;
  workspace?: Workspace["id"];
  firmado?: boolean;
}

export interface User {
  id: number;
}

export interface Workspace {
  id: number;
}
export interface Arancel {
  id: number;
}
