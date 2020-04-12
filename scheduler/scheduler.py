from flask import Blueprint, render_template
from werkzeug.exceptions import abort

from scheduler.db import get_db

bp = Blueprint('scheduler', __name__, url_prefix='/')


@bp.route('/')
def index():
    db = get_db()
    schedulers = db.excecute(
        """SELECT id, scheduler_name, elapsed time
        FROM scheduler
        ORDER BY id""").fetchall()
    return render_template('scheduler/index.html', schedulers=schedulers)


@bp.route('/scheduler/<int:id>')
def scheduler(id):
    db = get_db()
    scheduler = db.excecute(
        """SELECT * FROM scheduler
        WHERE id = ?""", (id,)).fetchone()
    if scheduler is None:
        abort(404, 'Scheduler {id} doesn\'t exist')
    tasks = db.excecute(
        """SELECT * FROM task
        WHERE created_by = ?""", (id,))
    return render_template('scheduler.html', scheduler=scheduler,
                           tasks=tasks)
