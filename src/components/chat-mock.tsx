import { onboardingChat } from '../content/journey';
import { Avatar, MockCard } from './mock-card';
import { WindmillMark } from './windmill-logo';

export type ChatMessage = {
  author: string;
  time: string;
  /** `@Name` mentions are highlighted like Slack mentions. */
  text: string;
  /** A person's photo; messages without one come from the Windy app. */
  avatar?: string;
};

function MessageText({ text }: { text: string }) {
  return (
    <p className="mt-1 text-sm leading-snug text-gray-600">
      {text.split(/(@\w+)/).map((part, index) =>
        part.startsWith('@') ? (
          <span key={index} className="text-[#0EA5E9]">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </p>
  );
}

/** A Slack-style thread between Windy and a teammate. */
export function ChatMock({
  messages = onboardingChat,
}: {
  messages?: ChatMessage[];
}) {
  return (
    <MockCard>
      <div className="flex flex-col gap-4">
        {messages.map((message) => (
          <div key={message.time} className="flex items-start gap-3">
            {message.avatar ? (
              <Avatar src={message.avatar} />
            ) : (
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-black/5 bg-white">
                <WindmillMark className="h-5 w-5 cursor-pointer text-black" />
              </div>
            )}
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-gray-900">
                  {message.author}
                </span>
                {!message.avatar && (
                  <span className="rounded bg-gray-200 px-1.5 py-0.5 text-[9px] font-medium text-gray-500">
                    APP
                  </span>
                )}
                <span className="text-[10px] text-gray-400">
                  {message.time}
                </span>
              </div>
              <MessageText text={message.text} />
            </div>
          </div>
        ))}
      </div>
    </MockCard>
  );
}
