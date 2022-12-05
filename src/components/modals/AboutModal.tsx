import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is an open source movie name guessing game -{' '}
        <a
          href="https://telegra.ph/List-of-Wordle-Movies-12-05"
          className="underline font-bold"
          target="_blank" 
          rel="noreferrer"
        >
          check out the all list movies here
        </a>{' '}
      </p>
 
      
    </BaseModal>
  )
}
