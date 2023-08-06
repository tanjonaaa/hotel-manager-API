BEGIN;
ALTER TABLE reservation DROP CONSTRAINT timestamp_check;
ALTER TABLE reservation ADD CONSTRAINT timestamp_check CHECK (end_time > start_time);
COMMIT;