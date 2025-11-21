from sqlalchemy import text
from app.config.database import SessionLocal

db = SessionLocal()

try:
    result = db.execute(text("SELECT 1"))
    print("DB OK:", result.scalar())
except Exception as e:
    print("DB ERROR:", e)
finally:
    db.close()
