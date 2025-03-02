import React, { useState } from "react";

const FormContacto = () => {
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  return (
    <div className="flex justify-center items-center mt-2 bg-gray-900">
      <form
        action="https://formsubmit.co/fabriidev@gmail.com"
        method="POST"
        className="bg-gray-800 p-6 rounded-xl shadow-lg w-96"
        onSubmit={() => setLoading(true)}
      >
        {/* Campos ocultos para FormSubmit */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://fabrizio-arias.vercel.app/" />

        <label className="block text-white mb-1">Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full p-2 mb-4 border border-pink-500 rounded bg-gray-700 text-white"
          required
        />

        <label className="block text-white mb-1">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-pink-500 rounded bg-gray-700 text-white"
          required
        />

        <label className="block text-white mb-1">Mensaje:</label>
        <textarea
          name="mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          className="w-full p-2 mb-4 border border-pink-500 rounded bg-gray-700 text-white"
          required
        />

        <button
          type="submit"
          className="bg-pink-500 text-white p-2 w-full rounded hover:bg-pink-700 transition duration-300 flex justify-center disabled:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading || enviado}
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>

        {enviado && (
          <p className="mt-4 text-center text-green-400">
            ✅ ¡Mensaje enviado con éxito!
          </p>
        )}
      </form>
    </div>
  );
};

export default FormContacto;
