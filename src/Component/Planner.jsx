import { useState } from "react";

function Planner() {

  const [completed, setCompleted] = useState([]);

  const tasks = [
    "Choose your wedding date",
    "Book the venue",
    "Select wedding outfits",
    "Plan jewellery",
    "Send invitations",
    "Book photographer"
  ];

  const toggleTask = (task) => {

    if (completed.includes(task)) {

      setCompleted(
        completed.filter(item => item !== task)
      );

    } else {

      setCompleted([
        ...completed,
        task
      ]);

    }
  };

  const progress =
    Math.round(
      (completed.length / tasks.length) * 100
    );

  return (

    <section className="planner">

      <div className="planner-content">

        <p>YOUR WEDDING CHECKLIST</p>

        <h2>
          Plan your perfect day.
        </h2>

        <p>
          Keep track of the important things
          before your big day.
        </p>

        <div className="progress">

          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          />

        </div>

        <strong>
          {progress}% completed
        </strong>

      </div>

      <div className="tasks">

        {tasks.map((task) => (

          <label
            key={task}
            className={
              completed.includes(task)
                ? "task completed"
                : "task"
            }
          >

            <input
              type="checkbox"
              checked={completed.includes(task)}
              onChange={() => toggleTask(task)}
            />

            <span>{task}</span>

          </label>

        ))}

      </div>

    </section>
  );
}

export default Planner;