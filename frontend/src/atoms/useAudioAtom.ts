import { atom, useAtom } from "jotai";
import { RefObject } from "react";

export const audioAtom = atom<RefObject<HTMLAudioElement> | null>(null);

const useAudioAtom = () => useAtom(audioAtom);

export default useAudioAtom;
