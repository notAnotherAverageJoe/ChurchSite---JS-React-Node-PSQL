-- Create Users Table
CREATE TABLE Users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) CHECK (role IN ('admin', 'staff')) DEFAULT 'staff'
);

-- Create Events Table
CREATE TABLE Events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    date TIMESTAMP NOT NULL,
    location VARCHAR(255) NOT NULL,
    is_online BOOLEAN DEFAULT FALSE,
    user_id UUID REFERENCES Users(id) ON DELETE CASCADE
);

-- Create Sermons Table
CREATE TABLE Sermons (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    preacher VARCHAR(255) NOT NULL,
    date TIMESTAMP NOT NULL,
    video_url TEXT,
    audio_url TEXT,
    transcript TEXT,
    user_id UUID REFERENCES Users(id) ON DELETE CASCADE
);

-- Create Donations Table
CREATE TABLE Donations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    donor_name VARCHAR(255) NOT NULL,
    amount NUMERIC(10, 2) NOT NULL,
    date TIMESTAMP NOT NULL,
    method VARCHAR(50) CHECK (method IN ('cash', 'check', 'online')) NOT NULL,
    member_id UUID REFERENCES Members(id) ON DELETE CASCADE
);

-- Create Members Table
CREATE TABLE Members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(15),
    joined_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Event RSVP Table (Many-to-Many relationship)
CREATE TABLE EventRSVP (
    member_id UUID REFERENCES Members(id) ON DELETE CASCADE,
    event_id UUID REFERENCES Events(id) ON DELETE CASCADE,
    PRIMARY KEY (member_id, event_id)
);
