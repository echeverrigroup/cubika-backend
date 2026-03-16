from fastapi import FastAPI, UploadFile, File

app = FastAPI()


@app.get("/")
def root():
    return {"message": "Cubika backend activo"}


@app.post("/upload")
async def upload_excel(file: UploadFile = File(...)):

    contents = await file.read()


    return {
        "filename": file.filename,
        "size_bytes": len(contents),
        "status": "archivo recibido"
    }