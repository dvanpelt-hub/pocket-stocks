CREATE TABLE holdings (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  ticker_symbol VARCHAR(10) NOT NULL,
  recommendation_status VARCHAR(4) NOT NULL,
  stock_value VARCHAR(15)
)