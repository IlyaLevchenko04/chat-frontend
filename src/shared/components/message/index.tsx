import { getCurrentDate } from "@shared/helpers/date";
import { Message } from "@shared/types/sockets";

export const MessageCard = (props: Message) => {
  const { date, time } = getCurrentDate(props.timestamp);

  return (
    <div className="flex justify-between gap-[12px] items-end border border-gray-300 rounded-xl p-4 bg-white shadow-sm">
      <div className="flex flex-col gap-2 text-gray-900 break-words">
        <p className="font-semibold text-sm">{props.user}</p>
        <p className="text-sm text-gray-700 break-all">{props.text}</p>
      </div>

      <span className="text-xs text-gray-500 text-nowrap">
        {date} / {time}
      </span>
    </div>
  );
};
