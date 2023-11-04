import { Logo } from '@/components/icons'
import { Button, HeaderContainer, HeaderContent, LogoContainer } from './styles'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <LogoContainer>
            <Logo width={40} height={38} />
            <h1>DT Money</h1>
          </LogoContainer>
          <Button>Nova Transação</Button>
        </HeaderContent>
      </HeaderContainer>
    </>
  )
}
