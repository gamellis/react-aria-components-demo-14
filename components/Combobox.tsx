"use client"

import {
  Button,
  ComboBox,
  Group,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
} from "react-aria-components"
import type { ListBoxItemProps } from "react-aria-components"
import CheckIcon from "@spectrum-icons/workflow/Checkmark"

const people = [
  {
    id: "1",
    name: "Wendy Cooper",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: "2",
    name: "Esther Howard",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: "3",
    name: "Curtis Williamson",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: "4",
    name: "Sylvia Harvey",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: "5",
    name: "Marvin Hawkins",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: "6",
    name: "Lester Hammond",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: "7",
    name: "Luisa Ray",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
]

function ComboBoxExample() {
  return (
    <>
      <ComboBox className="group flex flex-col gap-1 w-[200px]">
        <Label className="text-black cursor-default">Assignee</Label>
        <Group className="flex rounded-lg bg-white bg-opacity-90 focus-within:bg-opacity-100 transition shadow-md ring-1 ring-black/10 focus-visible:ring-2 focus-visible:ring-black">
          <Input className="flex-1 w-full border-none py-2 px-3 leading-5 text-gray-900 bg-transparent outline-none text-base" />
          <Button className="px-3 flex items-center text-gray-600 transition border-0 border-solid border-l border-l-gray-300 bg-transparent rounded-r-lg pressed:bg-gray-100 font-black">
            v
          </Button>
        </Group>
        <Popover className="max-h-60 w-[--trigger-width] overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out">
          <ListBox className="outline-none p-1" items={people}>
            {(item) => (
              <UserItem textValue={item.name}>
                <img
                  alt=""
                  src={item.avatar}
                  className="w-6 h-6 rounded-full"
                />
                <span className="truncate">{item.name}</span>
              </UserItem>
            )}
          </ListBox>
        </Popover>
      </ComboBox>
    </>
  )
}

function UserItem(props: ListBoxItemProps & { children: React.ReactNode }) {
  return (
    <ListBoxItem
      {...props}
      className="group flex items-center gap-2 cursor-default select-none py-2 pl-2 pr-4 outline-none rounded text-gray-900 focus:bg-sky-600 focus:text-white"
    >
      {({ isSelected }) => (
        <>
          <span className="flex-1 flex items-center gap-3 truncate font-normal group-selected:font-medium">
            {props.children}
          </span>
          {isSelected && (
            <span className="w-5 flex items-center text-sky-600 group-focus:text-white">
              <CheckIcon size="S" />
            </span>
          )}
        </>
      )}
    </ListBoxItem>
  )
}

export default ComboBoxExample
