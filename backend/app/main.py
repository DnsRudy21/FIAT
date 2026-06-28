from fastapi import FastAPI

app = FastAPI(
    title="FIAT API",
    description="Backend de la experiencia digital para la Ordenación Sacerdotal del Padre Maximiliano Constante Cedillo.",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "project": "FIAT",
        "status": "running",
        "message": "Bienvenido a FIAT."
    }