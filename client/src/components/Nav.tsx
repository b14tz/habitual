import { Cog6ToothIcon as SettingsIconSolid } from "@heroicons/react/24/solid";
import { SunIcon, MoonIcon, Cog6ToothIcon as SettingsIconOutline } from "@heroicons/react/24/outline";
import { HomeIcon as HomeIconSolid } from "@heroicons/react/20/solid";
import { HomeIcon as HomeIconOutline } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { auth } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Nav({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void }) {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    return (
        <>
            <nav>
                {user ? (
                    <div className="fixed top-0 left-0 right-0 flex flex-col items-start p-5 h-full w-fit bg-b-secondary dark:bg-db-secondary drop-shadow-xl">
                        <button
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            {window.location.pathname == "/" ? (
                                <HomeIconSolid className="h-6 w-6 text-t-primary dark:text-dt-primary" />
                            ) : (
                                <HomeIconOutline className="h-6 w-6 text-t-primary dark:text-dt-primary" />
                            )}
                        </button>
                        <button
                            className="mt-4"
                            onClick={() => {
                                navigate("/account");
                            }}
                        >
                            {window.location.pathname == "/" ? (
                                <SettingsIconOutline className="h-6 w-6 text-t-primary dark:text-dt-primary" />
                            ) : (
                                <SettingsIconSolid className="h-6 w-6 text-t-primary dark:text-dt-primary" />
                            )}
                        </button>
                        <button className="mt-4" onClick={toggleDarkMode}>
                            {darkMode ? (
                                <MoonIcon className="h-6 w-6 text-t-primary dark:text-dt-primary" />
                            ) : (
                                <SunIcon className="h-6 w-6 text-t-primary dark:text-dt-primary" />
                            )}
                        </button>
                    </div>
                ) : (
                    <div className="fixed top-0 left-0 flex flex-row flex-end p-10">
                        <button onClick={toggleDarkMode}>
                            {darkMode ? (
                                <MoonIcon className="h-6 w-6 text-t-primary dark:text-dt-primary" />
                            ) : (
                                <SunIcon className="h-6 w-6 text-t-primary dark:text-dt-primary" />
                            )}
                        </button>
                    </div>
                )}
            </nav>
        </>
    );
}
