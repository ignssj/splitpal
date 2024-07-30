CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE splits (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    category VARCHAR(15) NOT NULL,
    total INTEGER NOT NULL,
    qrcode VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE split_has_participant (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    organizer BOOLEAN DEFAULT false,
    split_id UUID,
    user_id UUID,
    FOREIGN KEY (split_id) REFERENCES splits(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE payments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    receipt VARCHAR(255) NOT NULL,
    value INTEGER NOT NULL,
    split_id UUID,
    user_id UUID,
    FOREIGN KEY (split_id) REFERENCES splits(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);