import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const EasyPadsHeader = () => {
    return (
        <div className="bg-neutral-800 text-white p-4 flex flex-col gap-6 items-center justify-between">
            <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold">EasyPads</h1>
            </div>
            <div className="flex items-center">
                <div className="mr-4">
                    <img src="https://avatars.githubusercontent.com/u/37309045?v=4" alt="manuel saavedra" className="w-10 h-10 rounded-full" />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-semibold">Hecho con ❤️ por Manuel Saavedra</p>
                    <a href="https://github.com/TuUsuarioDeGitHub" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-800 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-gray-700">
                        <FaGithub className="mr-2" />
                        Ver perfil en GitHub
                    </a>
                    <a href="https://www.instagram.com/manu_saav3dra/" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-800 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-gray-700">
                        <FaInstagram className="mr-2" />
                        Ver perfil en Intagram
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EasyPadsHeader;
