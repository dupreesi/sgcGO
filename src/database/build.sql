BEGIN; 

DROP TABLE IF EXISTS boards, users, topics CASCADE; 

CREATE TABLE users(
    id SERIAL PRIMARY KEY, 
    user_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    pass VARCHAR(100) NOT NULL
);

INSERT INTO users (user_name, email, pass) VALUES 
('Armand', 'armandl@email.com', 'password12'),
('Simon', 'simon@email.com', 'password12'),
('Eve', 'eve@email.com', 'password12'),
('LikeMike', 'likemike@email.com', 'password12');

CREATE TABLE boards (
    id SERIAL PRIMARY KEY,
    board_name VARCHAR(100) NOT NULL,
    user_id INTEGER REFERENCES users(id)
); 

INSERT INTO boards (board_name, user_id) VALUES 
('sgcGO122', 1),
('a590bd', 2),
('lkx89sdd', 3),
('b42sdwe', 4);

CREATE TABLE topics (
    id SERIAL PRIMARY KEY,
    board_id INTEGER REFERENCES boards(id),
    user_id INTEGER REFERENCES users(id),
    text_content TEXT,
    sgc INTEGER NOT NULL
);

INSERT INTO topics (board_id, user_id, text_content, sgc) VALUES 
(01, 01, 'stop: cake', 1),
(02, 02, 'Go: more Chairs', 2),
(03, 03, 'Cont: Being awesome', 3),
(04, 04, 'Stop: being late', 1);

COMMIT;
