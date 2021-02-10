from reportlab.platypus import TableStyle
from reportlab.lib.units import inch
from reportlab.lib import colors

def table_style():
	return TableStyle([
    ('INNERGRID', (0,0), (-1,-1), 0.25, colors.black),
    ('BOX', (0,0), (-1,-1), 0.25, colors.black),
    ('LEFTPADDING', (0,0), (-1,-1), 0.1*inch),
    ('RIGHTPADDING', (0,0), (-1,-1), 0.1*inch),
    ('TOPPADDING', (0,0), (-1,-1), 0.1*inch),
    ('BOTTOMPADDING', (0,0), (-1,-1), 0.1*inch),
    ('FONTSIZE', (0,0), (-1,-1), 13),
])
def table_row():
	return ['Preference','UG/PG','Semester','Subject']