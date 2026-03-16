from fastapi import APIRouter, UploadFile, File
from fastapi.responses import Response
import pandas as pd
from app.services.label_engine import generar_etiquetas_desde_df

router = APIRouter(prefix="/etiquetas", tags=["Etiquetas"])

@router.post("/generar")
async def generar_etiquetas(file: UploadFile = File(...)):

    df = pd.read_excel(file.file)

    pdf_bytes = generar_etiquetas_desde_df(df)

    return Response(
        content=pdf_bytes,
        media_type="application/pdf",
        headers={
            "Content-Disposition": "attachment; filename=etiquetas.pdf"
        }
    )