from datetime import datetime
def session():
    now = datetime.now()
    month = now.month
    year = now.year
    if month>10 and month<=12:
        return f"{year}-{year-2000+1}-even-sem"
    elif month>=0 and month<3:
        return f"{year-1}-{year-2000}-even-sem"
    elif month>=4 and month<9:
        return f'{year}-{year-2000+1}-odd-sem'