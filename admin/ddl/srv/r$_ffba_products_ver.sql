DROP TABLE IF EXISTS r$_ffba_products_ver;

CREATE TABLE r$_ffba_products_ver (
  id varchar(255) NOT NULL,
  reference varchar(255) NOT NULL,
  code varchar(255) NOT NULL,
  codetype varchar(50),
  "name" varchar(255) NOT NULL,
  pricebuy float8 NOT NULL,
  pricesell float8 NOT NULL,
  category varchar(255) NOT NULL,
  taxcat varchar(255) NOT NULL,
  attributeset_id varchar(255),
  stockcost float8,
  stockvolume float8,
  iscom bool NOT NULL,
  isscale bool NOT NULL,
  iskitchen bool NOT NULL,
  printkb bool NOT NULL,
  sendstatus bool NOT NULL,
  isservice bool NOT NULL,
  display varchar(255),
  "attributes" bytea,
  isvprice bool NOT NULL,
  isverpatrib bool NOT NULL,
  texttip varchar(255),
  warranty bool NOT NULL,
  image bytea,
  stockunits float8 NOT NULL,
  alias varchar(50),
  alwaysavailable bool NOT NULL,
  discounted varchar(5),
  candiscount bool NOT NULL,
  iscatalog bool,
  catorder int4,
  ispack bool NOT NULL,
  packquantity float8,
  packproduct varchar(255),
  promotionid varchar(50),
  allproducts bool,
  managestock bool,
  siteguid varchar(50) NOT NULL,
  sflag bool,
  commission float8,
  supplier varchar(50),
  defaultptr varchar(40),
  remotedisplay bool,
  defaultscreen varchar(5),
  preptime int4,
  averagecost numeric(12,3),
  ptroverride bool,
  fd timestamptz NOT NULL,
  td timestamptz
);

COMMIT;
