DROP TABLE IF EXISTS dashboard CASCADE;
DROP TABLE IF EXISTS feedback CASCADE;
DROP TABLE IF EXISTS insights CASCADE;
DROP TABLE IF EXISTS project CASCADE;
DROP TABLE IF EXISTS resources CASCADE;
DROP TABLE IF EXISTS timeline CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS userfeedback CASCADE;
DROP TABLE IF EXISTS userproject CASCADE;

CREATE TABLE users (
    user_id       SERIAL PRIMARY KEY,
    user_name     VARCHAR(30),
    first_name    VARCHAR(30) NOT NULL,
    last_name     VARCHAR(30) NOT NULL,
    email         VARCHAR(100) NOT NULL,
    password      VARCHAR(100) NOT NULL,
    profile_image BYTEA
);
CREATE TABLE project (
    project_id          SERIAL PRIMARY KEY,
    project_title       VARCHAR(50) NOT NULL,
    project_description VARCHAR(100),
    start_date          TIMESTAMP,
    end_date            TIMESTAMP,
    status              VARCHAR(50)
);

CREATE TABLE dashboard (
    dashboard_id             SERIAL PRIMARY KEY,
    overallprogress          INTEGER,
    feedbacksinprogresscount INTEGER,
    feedbackutlizationcount  INTEGER,
    users_user_id             INTEGER REFERENCES users (user_id) NOT NULL,
    projectscompletedcount   INTEGER,
    projectsinprogresscount  INTEGER,
    timestamp                TIMESTAMP
);

CREATE TABLE feedback (
    feedback_id        SERIAL PRIMARY KEY,
    feedback_text      VARCHAR(100),
    message            VARCHAR(100),
    date_submitted     TIMESTAMP,
    is_seen            INTEGER,
    status             VARCHAR(50) NOT NULL,
    project_project_id INTEGER REFERENCES project (project_id) NOT NULL
);

CREATE TABLE insights (
    action_id            SERIAL PRIMARY KEY,
    task_description     VARCHAR(100) NOT NULL,
    is_completed         INTEGER,
    date_created         TIMESTAMP,
    feedback_feedback_id INTEGER REFERENCES feedback (feedback_id) NOT NULL
);


CREATE TABLE resources (
    resource_id          SERIAL PRIMARY KEY,
    resource_description VARCHAR(100) NOT NULL,
    is_seen              INTEGER,
    date_created         TIMESTAMP,
    project_project_id   INTEGER REFERENCES project (project_id) NOT NULL
);

CREATE TABLE timeline (
    timeline_id        SERIAL PRIMARY KEY,
    due_date           TIMESTAMP NOT NULL,
    completion_date    TIMESTAMP,
    add_notes          VARCHAR(100),
    insights_action_id INTEGER REFERENCES insights (action_id) NOT NULL
);



CREATE TABLE userfeedback (
	users_user_id         INTEGER REFERENCES users (user_id) NOT NULL,
    feedback_feedback_id INTEGER REFERENCES feedback (feedback_id) NOT NULL,
    PRIMARY KEY (users_user_id, feedback_feedback_id)
);

CREATE TABLE userproject (
    users_user_id       INTEGER REFERENCES users (user_id) NOT NULL,
    project_project_id INTEGER REFERENCES project (project_id) NOT NULL,
    PRIMARY KEY (users_user_id, project_project_id)
);

ALTER TABLE dashboard ADD CONSTRAINT dashboard_user_fk FOREIGN KEY (users_user_id) REFERENCES users (user_id) NOT DEFERRABLE;

ALTER TABLE feedback ADD CONSTRAINT feedback_project_fk FOREIGN KEY (project_project_id) REFERENCES project (project_id) NOT DEFERRABLE;

ALTER TABLE insights ADD CONSTRAINT insights_feedback_fk FOREIGN KEY (feedback_feedback_id) REFERENCES feedback (feedback_id) NOT DEFERRABLE;

ALTER TABLE resources ADD CONSTRAINT resources_project_fk FOREIGN KEY (project_project_id) REFERENCES project (project_id) NOT DEFERRABLE;

ALTER TABLE timeline ADD CONSTRAINT timeline_insights_fk FOREIGN KEY (insights_action_id) REFERENCES insights (action_id) NOT DEFERRABLE;

ALTER TABLE userfeedback ADD CONSTRAINT userfeedback_feedback_fk FOREIGN KEY (feedback_feedback_id) REFERENCES feedback (feedback_id) NOT DEFERRABLE;

ALTER TABLE userfeedback ADD CONSTRAINT userfeedback_user_fk FOREIGN KEY (users_user_id) REFERENCES users (user_id) NOT DEFERRABLE;

ALTER TABLE userproject ADD CONSTRAINT userproject_project_fk FOREIGN KEY (project_project_id) REFERENCES project (project_id) NOT DEFERRABLE;

ALTER TABLE userproject ADD CONSTRAINT userproject_user_fk FOREIGN KEY (users_user_id) REFERENCES users (user_id) NOT DEFERRABLE;
